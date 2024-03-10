import { Suspense } from "react";

import Preloader from "./Preloader/Preloader";

// eslint-disable-next-line react/display-name
const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<Preloader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;


