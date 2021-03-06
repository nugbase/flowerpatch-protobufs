// Code generated by protoc-gen-go. DO NOT EDIT.
// source: protobuf/Counter.proto

package protobuf

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type Counter struct {
	Num                  int64    `protobuf:"varint,1,opt,name=num,proto3" json:"num,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-" datastore:"-"`
	XXX_unrecognized     []byte   `json:"-" datastore:"-"`
	XXX_sizecache        int32    `json:"-" datastore:"-"`
}

func (m *Counter) Reset()         { *m = Counter{} }
func (m *Counter) String() string { return proto.CompactTextString(m) }
func (*Counter) ProtoMessage()    {}
func (*Counter) Descriptor() ([]byte, []int) {
	return fileDescriptor_b59bbc9343c60a1c, []int{0}
}

func (m *Counter) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Counter.Unmarshal(m, b)
}
func (m *Counter) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Counter.Marshal(b, m, deterministic)
}
func (m *Counter) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Counter.Merge(m, src)
}
func (m *Counter) XXX_Size() int {
	return xxx_messageInfo_Counter.Size(m)
}
func (m *Counter) XXX_DiscardUnknown() {
	xxx_messageInfo_Counter.DiscardUnknown(m)
}

var xxx_messageInfo_Counter proto.InternalMessageInfo

func (m *Counter) GetNum() int64 {
	if m != nil {
		return m.Num
	}
	return 0
}

func init() {
	proto.RegisterType((*Counter)(nil), "protobuf.Counter")
}

func init() { proto.RegisterFile("protobuf/Counter.proto", fileDescriptor_b59bbc9343c60a1c) }

var fileDescriptor_b59bbc9343c60a1c = []byte{
	// 75 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x2b, 0x28, 0xca, 0x2f,
	0xc9, 0x4f, 0x2a, 0x4d, 0xd3, 0x77, 0xce, 0x2f, 0xcd, 0x2b, 0x49, 0x2d, 0xd2, 0x03, 0x0b, 0x08,
	0x71, 0xc0, 0xc4, 0x95, 0xa4, 0xb9, 0xd8, 0xa1, 0x52, 0x42, 0x02, 0x5c, 0xcc, 0x79, 0xa5, 0xb9,
	0x12, 0x8c, 0x0a, 0x8c, 0x1a, 0xcc, 0x41, 0x20, 0x66, 0x12, 0x1b, 0x58, 0x99, 0x31, 0x20, 0x00,
	0x00, 0xff, 0xff, 0x0e, 0x31, 0x26, 0x21, 0x47, 0x00, 0x00, 0x00,
}
