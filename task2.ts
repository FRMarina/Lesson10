// Починить код так чтобы Counter работал
class Counter {
  count = 0;

  increment(count: number = 1): void {
    this.count += count;
  }

  getCount(): number {
    return this.count;
  }
}

const counter = new Counter();
const inc = () => counter.increment();

inc();

console.log(counter.getCount());
