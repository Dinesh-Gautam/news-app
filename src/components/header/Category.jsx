import useSearchParamsActions from "../../hooks/useSearchParamsActions";
import { cn } from "../../utils/common";
import Icons from "../Icons";
import styles from "./category.module.css";

const categories = [
  {
    label: "Entertainment",
    uri: "news/Arts_and_Entertainment",
  },
  {
    label: "Business",
    uri: "news/Business",
  },
  {
    label: "Environment",
    uri: "news/Environment",
  },
  {
    label: "Health",
    uri: "news/Health",
  },
  {
    label: "Politics",
    uri: "news/Politics",
  },
  {
    label: "Science",
    uri: "news/Science",
  },
  {
    label: "Sports",
    uri: "news/Sports",
  },
];

export function CategoryList() {
  const { changeParam, getParam, deleteParam } = useSearchParamsActions();

  function categoryClickHandler(category) {
    changeParam("category", category);
  }

  function categoryRemoveClickHandler(category) {
    deleteParam("category");
  }

  function isActive(uri) {
    return getParam("category") === uri;
  }

  return (
    <div className={styles.categories}>
      {categories.map(({ uri, label }) => (
        <div
          key={uri}
          className={cn(styles.categoryButton, isActive(uri) && styles.active)}
        >
          <button onClick={() => categoryClickHandler(uri)} key={uri}>
            {label}
          </button>
          {isActive(uri) && (
            <button onClick={() => categoryRemoveClickHandler()}>
              <Icons.Cross fontSize="medium" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
