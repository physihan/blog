import { createSignal } from "solid-js"
export default function () {
    const [value, setValue] = createSignal<string>("")
    return <div>

        请输入文本
        <textarea value={value()} onInput={(e) => { setValue(e.target.value); console.log('sss') }} name="" id="" cols="30" rows="10"></textarea>
        请输入关键词
        <input type="text" />
        <div>
            生成模板：{value()}
        </div>
    </div>
}