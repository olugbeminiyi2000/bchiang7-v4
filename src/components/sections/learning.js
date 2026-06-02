import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const pulse = keyframes`
  0%   { box-shadow: 0 0 0 0 var(--green-tint); }
  70%  { box-shadow: 0 0 0 8px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
`;

const StyledLearningSection = styled.section`
  max-width: 700px;
`;

const StyledTimeline = styled.div`
  position: relative;
  margin-top: 50px;
  padding-left: 32px;
`;

const StyledItem = styled.div`
  position: relative;
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 0;
  }

  &:not(:last-child):after {
    content: '';
    position: absolute;
    left: -32px;
    top: 20px;
    bottom: -48px;
    width: 2px;
    background: var(--lightest-navy);
  }

  .node {
    position: absolute;
    left: -38px;
    top: 6px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid var(--green);
    background: var(--navy);
    z-index: 1;

    &.completed {
      background: var(--green);
    }

    &.in-progress {
      background: var(--navy);
      animation: ${pulse} 2s ease-in-out infinite;
    }
  }

  .item-overline {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 6px;

    .item-category {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      color: var(--green);
    }

    .item-status {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      padding: 2px 8px;
      border-radius: var(--border-radius);
      border: 1px solid;

      &.completed {
        color: var(--green);
        border-color: var(--green);
      }

      &.in-progress {
        color: var(--blue);
        border-color: var(--blue);
      }
    }
  }

  .item-title {
    margin: 0 0 4px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);
    font-weight: 600;
  }

  .item-meta {
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    color: var(--light-slate);
  }

  .item-desc {
    margin-top: 12px;
    color: var(--light-slate);
    font-size: var(--fz-md);

    p {
      margin: 0;
    }
  }
`;

const Learning = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/learning/" } }) {
        edges {
          node {
            html
            frontmatter {
              order
              title
              category
              institution
              author
              status
            }
          }
        }
      }
    }
  `);

  const items = data.allMarkdownRemark.edges.sort(
    (a, b) => a.node.frontmatter.order - b.node.frontmatter.order,
  );

  return (
    <StyledLearningSection id="learning" ref={revealContainer}>
      <h2 className="numbered-heading">Learning Path</h2>

      <StyledTimeline>
        {items.map(({ node }, i) => {
          const { title, category, institution, author, status } = node.frontmatter;
          const meta = institution || author;
          const isCompleted = status === 'completed';
          const statusLabel = isCompleted ? 'Completed' : 'In Progress';

          return (
            <StyledItem key={i}>
              <div className={`node ${isCompleted ? 'completed' : 'in-progress'}`} />

              <div className="item-overline">
                <span className="item-category">{category}</span>
                <span className={`item-status ${isCompleted ? 'completed' : 'in-progress'}`}>
                  {statusLabel}
                </span>
              </div>

              <h3 className="item-title">{title}</h3>

              {meta && <p className="item-meta">{meta}</p>}

              {node.html && (
                <div className="item-desc" dangerouslySetInnerHTML={{ __html: node.html }} />
              )}
            </StyledItem>
          );
        })}
      </StyledTimeline>
    </StyledLearningSection>
  );
};

export default Learning;
