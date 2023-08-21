const socialMediaLink = [
  {
    name: 'twitter',
    href: 'https://twitter.com/_asheann_',
    icon: 'i-fa6-brands-twitter hover:text-sky-400'
  },
  {
    name: 'github',
    href: 'https://github.com/AsheAnn',
    icon: 'i-fa6-brands-github hover:text-white'
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/_asheann_/',
    icon: 'i-fa6-brands-instagram hover:text-[#ff52eb]'
  },
  {
    name: 'email',
    href: 'mailto:asiasheann@gmail.com',
    icon: 'i-mdi-email hover:text-yellow-300'
  }
]

export const SocialLink: React.FC<React.PropsWithChildren<{
  isTarget?: boolean
  href: string
  className?: string
}>> = ({ isTarget, href, className, children }) => {
  return (
    <>
      {isTarget ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <div className={className}>{children}</div>
        </a>
      ) : (
        <a href={href}>
          <div className={className}>{children}</div>
        </a>
      )}
    </>
  )
}

const SocialLinkList: React.FC = () => (
  <>
    {socialMediaLink.map((link) => {
      const isTarget = link.name !== 'email'
      return (
        <SocialLink
          isTarget={isTarget}
          href={link.href}
          className={link.icon}
          key={link.name}
        />
      )
    })}
  </>
)

export default SocialLinkList
