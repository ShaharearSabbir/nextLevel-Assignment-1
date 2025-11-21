### What are some differences between interfaces and types in TypeScript?

Answer: আমরা টাইপ সব ধরনের ডাটাটাইপের জন্য ব্যবহার করি কিন্তু ইন্টারফেস শুধু মাত্র object এর জন্য ব্যবহার করতে পারি এ ছাড়া টাইপ আর ইন্টারফেস এর মধ্যে তেমন কোন পার্থক্য নেই।

### What is the use of the keyof keyword in TypeScript? Provide an example.

Answer: keyof keyword টা আমরা মুলত ইন্টারফেস এর কী গুলকে উনিওন টাইপ হিসেবে পাওয়ার জন্য ব্যবহার করি



example:
```
interface Product {
name: string;
price: number;
quantity: number;
}

productKey = keyof Product //it will give "name" | "price" | "quantity"

```