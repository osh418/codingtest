function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let currentWeight = 0;
    const crossingTrucks = [];
    const truckWeights = truck_weights.map((truck) => {
        return {
            truck,
            count: 0,
        };
    });

    while (true) {
        if (truckWeights.length === 0 && crossingTrucks.length === 0) {
            break;
        }

        const crossingTruck = crossingTrucks.shift();
        if (crossingTruck) {
            if (crossingTruck.count >= bridge_length) {
                currentWeight -= crossingTruck.truck;
            } else {
                crossingTrucks.unshift(crossingTruck);
            }
        }

        const currentTruck = truckWeights.shift();
        if (currentTruck) {
            if (
                currentWeight + currentTruck.truck <= weight &&
                crossingTrucks.length < bridge_length
            ) {
                crossingTrucks.push(currentTruck);
                currentWeight += currentTruck.truck;
            } else {
                truckWeights.unshift(currentTruck);
            }
        }

        crossingTrucks.forEach((truck) => {
            if (!truck) return;
            truck.count++;
        });
        answer++;
    }

    return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110