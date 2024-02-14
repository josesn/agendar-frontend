import { Button } from "./styles";

export default function ButtonSubmit({ text, type, color }) {
    return(
        <Button type={type} color={color}>{text}</Button>
    );
}