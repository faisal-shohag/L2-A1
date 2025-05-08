function formatString(input: string, toUpper?: boolean): string {
  return toUpper === undefined || toUpper
    ? input.toUpperCase()
    : input.toLowerCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    return ([] as T[]).concat(...arrays)
 }
 
 class Vehicle {
    make: string;
    year: number;

    constructor(make:string, year:number) {
        this.make = make
        this.year = year
    }

    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`
    }
}


class Car extends Vehicle {
    model:string
    
    constructor(make:string, year:number, model:string, ) {
        super(make, year)
        this.model = model
    }

    getModel() {
        return `Model: ${this.model}`
    }
    
}


function processValue(value: string | number): number{
    return (typeof value === "string") ? value.length : value*2;
}


interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products:Product[]):Product|null {
    if(products.length === 0) return null
    let res = products[0]

    for(let product of products) {
        res = res.price < product.price ? product : res
    }

    return res
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }

  function getDayType(day: Day): string {
    return  day === Day.Sunday || day === Day.Saturday ? "Weekend" : "Weekday";
  }




  async function squareAsync(n: number): Promise<number> {
    return new Promise(function(resolve, reject) {
      if(n>0) {
          setTimeout(() => {
              resolve(n*n)
          }, 1000)
      } else {
          reject('Error: Negative')
      }
      
    })
  }
