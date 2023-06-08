import utilStyles from '../styles/utils.module.css';

export default function Usernames({ users }) {
    if (users){
        return (
            <ul>
                {users.map(({name}) => (
                    <li className={utilStyles.listItem} key={name}>{name}</li>
                ))}
            </ul>    
        );
    }
    return null;
}