import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { data: session } = useSession();
    console.log('Session: ', session);
    
    const handleSignIn = async (e) => {
        // Don't refresh
        e.preventDefault();
        console.log('Email: ', email);
        await signIn('github', {
            redirect: false,
            email,
            password
        }).then(response => console.log(response));        
    };

    return (
        <form onSubmit={handleSignIn} method="post" noValidate>
            <div>
                <input type="email" name="email" id="email" placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <input type="password" name="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <p>New here? <a href="/sign-up">Create an account</a>.</p>
            </div>
            <div>
                <input type="submit" defaultValue="Log in" />
            </div>
        </form>
    );
}