import React from 'react';
import { MainTitle, SubTitle } from '../../theme/CommonStyle';
import resource from '../../ultil/codeout/index';
// Components
import HightLight from '../../components/HightLight';

function Guide() {
  return (
    <div>
      <div className="container">
        <main className="pb-5">
          <MainTitle>Guide</MainTitle>
          {/* GET */}
          <SubTitle>Get a resource</SubTitle>
          <HightLight content={resource.get} />
          <SubTitle>List all resources</SubTitle>
          <HightLight content={resource.getAll} />
          {/* Create */}
          <SubTitle>Create a resource</SubTitle>
          <HightLight content={resource.create} />
          {/* Update */}
          <SubTitle>Update a resource (PATCH)</SubTitle>
          <HightLight content={resource.patch} />
          {/* Filter */}
          <SubTitle>Filter</SubTitle>
          <HightLight content={resource.filter} />
          {/* Sort */}
          <SubTitle>Sort</SubTitle>
          <HightLight content={resource.sort} />
          {/* Pagination */}
          <SubTitle>Pagination</SubTitle>
          <HightLight content={resource.pagination} />
          {/* Mix */}
          <SubTitle>Mix</SubTitle>
          <p>
            You can use <strong>filter</strong>, <strong>sort</strong>,{' '}
            <strong>pagination</strong> together.
          </p>
          <HightLight content={resource.mix} />
        </main>
      </div>
    </div>
  );
}

export default Guide;
