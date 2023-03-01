export default function LoginPage() {
    return (
        <>
            <h1>Login</h1>

            <form method="post" noValidate>
            <div>
                <input type="email" name="email" id="email" placeholder="Email"
                        defaultValue="EMAIL" />
            </div>
            <div>
                <input type="password" name="password" id="password" placeholder="Password" />
            </div>
            <div>
                <p>New here? <a href="/sign-up">Create an account</a>.</p>
            </div>
            <div>
                <input type="submit" defaultValue="Log in" />
            </div>
        </form>
        </>
    );
}