function Tempo(props) {
    console.log('> Passando pelo Frontend')
    const dynamicDate = new Date()
    const dynamicDateString = dynamicDate.toString()

    return (
        <div>
            <div>
                {dynamicDateString} (dinâmico)
            </div>
            <div>
                {props.staticDateString} (estático)
            </div>
        </div>
    )
}

export function getStaticProps() {
    console.log('> Passando pelo getStaticProps()')
    const staticDate = new Date()
    const staticDateString = staticDate.toString()

    return {
        props: {
            staticDateString
        }
    }
}

export default Tempo