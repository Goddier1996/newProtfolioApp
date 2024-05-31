
const ButtonNextBackProjects: React.FC<any> = ({ type, Click, typeClassName }) => {
    return (
        <>
            <button
                aria-label={type}
                onClick={() => Click()}
                className={typeClassName}
            />
        </>
    )
}

export default ButtonNextBackProjects;