import { useState } from "preact/hooks"
import { Button } from "../components/Button.tsx"

const mainStyle = {
    "display":"flex",
    "width":"100vw",
    "height":"100vh",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection":"column"
}

export default function VaquitaCounter () {

    const [count, setCount] = useState(1);
    
    
    const moooGenerator = ()=> {
        const content = [];

        if(count > 5){
            content.push(<h2 class="text-2xl font-bold">A tus vaquitas les dió demofobia pipipipipi 😞</h2>);
            content.push(
            <div class="flex items-center justify-center">
                <img src="/mrTrauma.webp" alt="mrIncreible traumado" />
            </div>
            )
            return content;
        }

        if(count > 0){
            
            content.push(<h2 class="text-2xl font-bold">{count} vaquita{count === 1 ? "":"s"}: mo{"o".repeat(count)}</h2>);

            const vaquitas = []

            for(let x=0;x<count;x++){
                vaquitas.push(<img src="/vaquita.gif" alt="vaquita bailando" />)
            }

            content.push(
                <div class="flex items-center justify-center">
                    {...vaquitas}
                </div>
            )
            return content;
        }

        content.push(<h2 class="text-2xl font-bold">???</h2>);
        content.push(
        <div class="flex items-center justify-center">
            <img src="/rock.gif" alt="???" />
        </div>
        )
        return content;
        
        
    }

    return (
        <main style={mainStyle}>
            {moooGenerator()}
            <div>
                <Button disabled={count < 1} onClick={() => setCount(count - 1)}>-1</Button>
                <Button disabled={count > 5} onClick={() => setCount(count + 1)}>+1</Button>
            </div>
            <span class="text-gray-400 absolute bottom-4">Web test made with Deno 🦕 + Fresh Framework <img class="w-4 inline" src="/logo.svg"/>, by dona.</span>
        </main>
    )
} 