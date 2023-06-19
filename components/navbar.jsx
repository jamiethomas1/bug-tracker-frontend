import Document from 'next/document';
import Head from 'next/head';
import styles from './styles/navbar.module.css';

export default function Navbar({ session }) {
    return (
        <>
            <Head>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <div className="navbar bg-dark navbar-expand-lg" data-bs-theme="dark" role="navigation">
                <div className="container justify-content-space-around">
                    <a href="/" className={styles.logo + " navbar-brand fw-bold"}>Bug Tracker</a>
                    <div className="d-flex align-items-center gap-4">
                        <ul className="nav nav-pills">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" href="/my/projects/">Projects</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" href="/my/tickets/">Tickets</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" href="/inbox/">Inbox</a>
                            </li>
                        </ul>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={session.user.image} alt="Profile picture" className={styles.profilepicture}/>
                                <p className="text-white mb-0">{session.user.name}</p>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a href="/profile/USER_ID" className="dropdown-item">Profile</a></li>
                                <li><a href="#" className="dropdown-item">Settings</a></li>
                                <li><a href="/api/auth/signout" className="dropdown-item">Log out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}