type DefaultInputProps = {
    id: string;
    labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type, labelText}: DefaultInputProps) {
    return (
        <>
        <label htmlFor="meuInput">{labelText}</label>
        <input id={id} type={type} />
        </>
    );
}