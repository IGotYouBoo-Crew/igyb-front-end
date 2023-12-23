export default function ProfilePicture({ userData, className }) {
    function defaultImage( {target} ) {
        target.onError = null;
        target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrb5zM9IM0Calt0JRegObDpvq61W6wZ2BdGAQ1dF-i_g&s";
    }
    return (
        <img
            src={userData.profilePicture}
            alt="Profile Pic"
            className={className}
            onError={(target) => defaultImage(target)}
        />
    );
}
