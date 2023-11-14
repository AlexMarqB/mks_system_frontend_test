"use client"
import * as S from './styles'

export function SkeletonCard() {
    return (
      <S.SkeletonContainer data-testid="skeleton-card">
        <S.SkeletonHeadContainer />
        <S.SkeletonTitleContainer />
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }}>
          <S.SkeletonQtdContainer>
            <S.SkeletonQtdLabel />
            <S.SkeletonQtdButtonContainer>
              <S.SkeletonQtdButton />
              <div />
              <S.SkeletonQtdButton />
            </S.SkeletonQtdButtonContainer>
          </S.SkeletonQtdContainer>
          <S.SkeletonPrice />
        </div>
      </S.SkeletonContainer>
    );
  }