// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { rid } = req.query
  res.status(200).json({ id: rid, name: 'First Room' })
}
