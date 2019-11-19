import React, { Component } from 'react';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('http://192.168.10.10:3001/posts')
            .catch(err => console.error(err))
            .then(res => res.json())
            .then(posts => this.setState({ posts }))
    }

    render() {
        return (
            <div className="container">
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Título</th>
                            <th scope="col">Autor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.posts.map((post) => (
                                <tr key={post.id}>
                                    <th scope="row">{post.id}</th>
                                    <td>{post.title}</td>
                                    <td>{post.author}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}


export default Posts;