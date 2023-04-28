import { createSignal, onMount } from 'solid-js';

export default function Clipboard({ text }) {
    const [copySuccess, setCopySuccess] = createSignal(false);

    async function handleCopy() {
        await navigator.clipboard.writeText(text);
        setCopySuccess(true);
        setTimeout(() => {
            setCopySuccess(false);
        }, 2000);
    }
    onMount(() => {
        navigator.permissions.query({ name: 'clipboard-write' }).then(function (result) {
            if (result.state === 'granted') {
                console.log("允许复制")
            } else if (result.state === 'prompt') {
                console.log("未知")
            }
            // 如果被拒绝，请不要做任何操作。
        });
    })
    return (
        <div class='flex items-center'>
            <div>{text}</div>
            <button class=' text-green-700 text-sm ml-2 ' onClick={handleCopy}>
                {copySuccess() ? '复制成功!' : '复制'}
            </button>
        </div>
    );
}
