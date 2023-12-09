
const ButtonNextBackProjects: React.FC<any> = ({ type, Click, typeClassName }) => {

    return (
        <>
            <button
                aria-labelledby={type}
                onClick={() => Click()}
                className={typeClassName}
            />
        </>
    )
}

export default ButtonNextBackProjects;