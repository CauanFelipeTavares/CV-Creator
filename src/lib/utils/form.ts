export type TypeInputChange = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

export function HandleFormByName(ev: TypeInputChange, obj: { [key: string]: string }){

    obj[ev.target.name] = ev.target.value

}