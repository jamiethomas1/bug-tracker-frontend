import Head from 'next/head';

export default function Navbar() {
    return (
        <>
            <Head>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"/>
            </Head>
            <div class="navbar bg-dark navbar-expand-lg" data-bs-theme="dark" role="navigation">
                <div class="container justify-content-space-around">
                    <a href="/" class="navbar-brand fw-bold">Bug Tracker</a>
                    <div class="d-flex align-items-center gap-4">
                        <ul class="nav nav-pills">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" href="/my/organisations/">Organisations</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" href="/my/projects/">Projects</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" href="/my/tickets/">Tickets</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" href="/inbox/">Inbox</a>
                            </li>
                        </ul>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle d-flex align-items-center gap-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                                <p class="text-white mb-0">USERNAME</p>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a href="/profile/USER_ID" class="dropdown-item">Profile</a></li>
                                <li><a href="#" class="dropdown-item">Settings</a></li>
                                <li><a href="/login/logout.php" class="dropdown-item">Log out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}