

// 생소한 라이브러리
// 문서 부족

type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);
declare function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];

declare const [count, setCount] = useState(0);

setCount(prev + 1) === 1



// 타입 정의
// Dispatch<A>
// 이 타입은 value라는 파라미터를 받고 반환 값이 없는 함수(void)를 설명합니다.
// A는 제네릭 타입이며, 이 함수에 전달될 값의 타입을 의미합니다.
// 예를 들어, 상태를 업데이트하는 함수에 사용되며, 이 함수에 어떤 값이든 전달할 수 있습니다.

// SetStateAction<S>
// 이 타입은 S 타입의 값, 또는 S 타입의 이전 상태(prevState)를 받아 S 타입의 새 상태를 반환하는 함수를 의미합니다.
// S는 역시 제네릭 타입이며, 상태의 타입을 의미합니다.
// 이는 useState에서 상태를 설정할 때, 직접 값을 설정하거나 업데이트 로직을 함수로 전달할 수 있음을 나타냅니다.

// useState 함수
// useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>]
// 이 함수는 제네릭 타입 S를 사용하며, 초기 상태를 설정하기 위한 파라미터 initialState를 받습니다. initialState는 S 타입의 값이거나 S 타입의 값을 반환하는 함수일 수 있습니다.
// 반환 타입은 [S, Dispatch<SetStateAction<S>>] 입니다. 이는 튜플 타입으로, 첫 번째 요소는 상태(S 타입), 두 번째 요소는 상태를 업데이트하는 함수(Dispatch<SetStateAction<S>>)입니다.
// 함수로서의 초기 상태(() => S)를 사용하는 것은 계산 비용이 높은 초기 상태를 필요에 따라 계산하여 설정하고자 할 때 유용합니다.