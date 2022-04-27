import React from 'react'
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import PropTypes from 'prop-types'

function RepoItem({ repo }) {
  const { name, description, html_url, forks, open_issues, watchers_count } =
    repo

  return (
    <div className='mb-2 rounded-md card bg-gray-700 hover:bg-slate-500'>
      <div className='card-body'>
        <h3 className='mb-2 text-xl font-semibold'>
          <a href={html_url}>
            <FaLink className='inline mr-1' /> {name}
          </a>
        </h3>
      </div>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem
