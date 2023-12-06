/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ComponentProperties {
  title: string
}

class Component<T extends ComponentProperties> {
  constructor(public props: T) {

  }
}

class Page extends Component<ComponentProperties> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export { };