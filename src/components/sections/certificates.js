import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledCertificatesSection = styled.section`
  max-width: 900px;
`;

const StyledCertificatesGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 15px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledCertificate = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  padding: 2rem 1.75rem;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
  }

  .certificate-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24px;

    .award-icon {
      color: var(--green);

      svg {
        width: 42px;
        height: 42px;
      }
    }

    .certificate-link {
      color: var(--light-slate);
      transition: var(--transition);

      &:hover {
        color: var(--green);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .certificate-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-lg);
    font-weight: 600;
    line-height: 1.3;
    flex-grow: 1;
  }

  .certificate-issuer {
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    color: var(--green);
    margin-bottom: 6px;
  }

  .certificate-date {
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    color: var(--light-slate);
  }
`;

const Certificates = () => {
  const revealContainer = useRef(null);
  const revealItems = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { t } = useTranslation();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
    revealItems.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/certificates/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              issuer
              date
              url
            }
          }
        }
      }
    }
  `);

  const certificates = data.allMarkdownRemark.edges;

  const formatDate = dateStr => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <StyledCertificatesSection id="certificates" ref={revealContainer}>
      <h2 className="numbered-heading">{t('sections.certifications')}</h2>

      <StyledCertificatesGrid>
        {certificates.map(({ node }, i) => {
          const { title, issuer, date, url } = node.frontmatter;
          return (
            <StyledCertificate key={i} ref={el => (revealItems.current[i] = el)}>
              <div className="certificate-top">
                <span className="award-icon">
                  <Icon name="Award" />
                </span>
                <a
                  href={url}
                  aria-label="Certificate Link"
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-link">
                  <Icon name="External" />
                </a>
              </div>

              <h3 className="certificate-title">{title}</h3>
              <p className="certificate-issuer">{issuer}</p>
              <p className="certificate-date">{formatDate(date)}</p>
            </StyledCertificate>
          );
        })}
      </StyledCertificatesGrid>
    </StyledCertificatesSection>
  );
};

export default Certificates;
