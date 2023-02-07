// this way only use import to serve modules.
// since we do not have a package.json file nor node_modules here
// here to import image we use the static folder, since anyway people will access it from a absolute url
// islands dir reflects all the components whom will be renderer on the client CSR
// components dir reflects server side renderer components SSR

import { Head } from "$fresh/runtime.ts";
import VaquitaCounter from "../islands/VaquitaCounter.tsx";


const vaquitaPage = () => {

    return (
      <>
        <Head>
          <title>Vaquita Counter Strike</title>
        </Head>
        <VaquitaCounter/>
      </>
    )
}

export default vaquitaPage