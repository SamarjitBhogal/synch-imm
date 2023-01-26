async function Layout(props) {
    return (
        <div>
            <NavBar/>
            <main>
                {props.childern}
            </main>
            <Footer/>
        </div>
    );
}