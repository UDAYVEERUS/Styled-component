import  styled from "styledcomponents" 
const ButtonComp = ({backgroundColor,text,color,border}) => {

const Button = styled.button`
 margin-right:1rem;
 padding:.5rem;
 border-radius:.2rem;
 background-color: ${backgroundColor};
 color:${color};
 border:${border};
 font-size:0.96rem;
`
return <Button border = {border} backgroundColor = {backgroundColor} color = {color}>
{text}
</Button>
}

export default ButtonComp