# model

## WorkItems

```ts
class WorkItems {
  id: string;
  title: string;
  type: string;
  description: string;
  consume: number;
}
```

```ts
class Settings {
  id: string;
  userId: string;
  detail: object;
}
```

```ts
class Task {
  id: string;
  type: string;
  name: string;
  params: object;
  done: boolean;
  cycle: number;
  timing: datetime;
}
```
