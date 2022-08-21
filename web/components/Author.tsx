import React from 'react';

interface AuthorInterface {
	[person: string]: {
		name: string;
		blog: string;
	}
}

const Author: React.FC = ({ author }: AuthorInterface) => {
	return (
		<div>
			{author.blog
				? <a href={author.blog} target="_blank">{author.name}</a>
				: author.name
			}
		</div>
	)
}

export default Author;
