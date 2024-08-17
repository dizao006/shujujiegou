function hashTable() {
  //链地址法实现
  this.storage = [];
  this.count = 0; //记录多少个数了
  this.limit = 7; //总长度后续扩容
  //方法
  //哈希函数
  this.hashFunc = function (str, size) {
    //将字符串转换为比较大的数字
    //将比较大的数字压缩到数组的范围内

    //定义hashCode
    let hashCode = 0;
    //霍纳算法
    for (let i = 0; i < str.length; i++) {
      //获取unicode编码
      hashCode = 37 * hashCode + str.charCodeAt(i); //随便一个质数
    }
    //取余操作
    let index = hashCode % size;
    return index;
  };
  //插入与修改 哈希表的插入与修改时同一个方法
  this.put = function (key, value) {
    //1 根据key获取索引值 将数据插入到指定位置
    let index = this.hashFunc(key, this.limit);
    //2 根据索引取出桶 如果不存在则创建桶
    let bucket = this.storage[index];
    if (bucket == null) {
      //新增
      bucket = [];
      this.storage[index] = bucket;
    }
    //3 判断新增还是修改  如果已经有值则进行修改，如果没有则进行添加
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] == key) {
        //修改
        tuple[1] = value;
        return;
      }
    }
    //4 新增操作
    bucket.push([key, value]);
    this.count += 1;
    //扩容 当数量大于限制的0.75的时候进行扩容2倍
    if (this.count > this.limit * 0.75) {
      let newLimit = this.limit * 2;
      let newPriew = this.getPrime(newLimit);
      this.resize(newPriew);
    }
  };
  this.resize = function (newLimit) {
    let oldStorage = this.storage;
    this.storage = [];
    this.count = 0;
    this.limit = newLimit;

    for (let i = 0; i < oldStorage.length; i++) {
      let bucket = oldStorage[i];
      if (bucket != null) {
        for (let j = 0; j < bucket.length; j++) {
          let tuple = bucket[j];
          this.put(tuple[0], tuple[1]); // 重新插入键值对
        }
      }
    }
  };
  this.get = function (key) {
    // 根据key获取对应的index
    let index = this.hashFunc(key, this.limit);
    //根据index获取bucket
    let bucket = this.storage[index];
    if (bucket == null) {
      return null;
    }
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] == key) {
        return tuple[1];
      }
    }
    return null;
  };
  this.remove = function (key) {
    let index = this.hashFunc(key, this.limit);
    let bucket = this.storage[index];
    if (bucket == null) {
      return false;
    }
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] == key) {
        bucket.splice(i, 1);
        this.count--;
        return true; // 表示删除成功
      }
      //缩小容量
      if (this.limit > 7 && this.count < this.limit * 0.25) {
        let newLimit = Math.floor(this.limit / 2);
        let newPriew = this.getPrime(newLimit);
        this.resize();
      }
    }
    return false;
  };
  this.isEmpty = function () {
    return this.count == 0;
  };
  this.size = function () {
    return this.count;
  };
  this.isPrime = function (num) {
    //判断是否为质数
    let temp = parseInt(Math.sqrt(num));
    for (let i = 0; i < temp; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  };
  this.getPrime = function (num) {
    while (!this.isPrime(num)) {
      num++;
    }
    return num;
  };
}

let hs = new hashTable();

hs.put("abc", "123");
hs.put("abcd", "123ss");
hs.put("cabca", "12322");
hs.put("absddcas", "1235555");

console.log("====================================");
console.log(hs.get("abc"));
hs.put("abc", "55555");
console.log(hs.get("abc"));
hs.remove("abc");
console.log(hs.get("abc"));
