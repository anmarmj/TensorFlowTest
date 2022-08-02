// const shape = [4, 2];
// const data = tf.tensor([1, 3, 2, 2, 5, 2, 9, 1], shape); //this will create 4 arrays of 2 based on the shape value this values unchangle
// const data2 = tf.variable(tf.zeros([8]))

// data2.print();

// data2.assign(tf.tensor1d([22, 11, 22, 55, 66, 77, 96 , 32]))

// data2.print();

// const data3 = tf.tensor1d([11,22,66,33]);
// const data4 = tf.tensor1d([11,23,11,98]);

// data3.print();
// data4.print();

// data3.add(data4).print();
// data3.mul(data4).print();
// data3.div(data4).print();

//define a module

function simpleAdd(input1,input2)
{
   return tf.tidy(()=>{
   const x1 = input1;
   const x2 =input2;
   const y = x1.add(x2);
   return y;
   });
}

const data1 = tf.tensor1d([1,4,3,2]);
const data2 = tf.tensor1d([6,22,5,7]);

const result = simpleAdd(data1,data2);
result.print();