import cars from '@/data/cars.json';

export default function Cars() {
    return (
        <div>
            {cars.map(car => (
                <div key={car.slug}>{car.title}</div>
            ))}
        </div>
    );
}
