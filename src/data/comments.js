export const getCommentsData = async () => {
    return [
        {
            _id: "10",
            user: {
                _id: "a",
                name: "John Doe",
                username: "johndoe"
            },
            desc: "it was a nice post. Good job!",
            post: "1",
            parent: null,
            replyOnUser: null,
            createdAt: "2022-12-31T17:22:05.092+0000",
        },
        {
            _id: "11",
            user: {
                _id: "b",
                name: "Jane Jones",
                username: "janejones"
            },
            desc: "here's a reply!",
            post: "1",
            parent: "10",
            replyOnUser: "a",
            createdAt: "2022-12-31T17:22:05.092+0000",
        },
        {
            _id: "12",
            user: {
                _id: "b",
                name: "Jane Jones",
                username: "janejones"
            },
            desc: "love this <3",
            post: "1",
            parent: null,
            replyOnUser: null,
            createdAt: "2022-12-31T17:22:05.092+0000",
        },
        {
            _id: "13",
            user: {
                _id: "c",
                name: "James Bond",
                username: "imaspy007"
            },
            desc: "nice work agent.",
            post: "1",
            parent: null,
            replyOnUser: null,
            createdAt: "2022-12-31T17:22:05.092+0000",
        },
    ];
}