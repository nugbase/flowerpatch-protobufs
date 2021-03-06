// Code generated by protoc-gen-go. DO NOT EDIT.
// source: protobuf/inventory.proto

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

type ItemType int32

const (
	ItemType_HEMP     ItemType = 0
	ItemType_OIL      ItemType = 1
	ItemType_CRYSTAL  ItemType = 2
	ItemType_LAND_ICE ItemType = 3
)

var ItemType_name = map[int32]string{
	0: "HEMP",
	1: "OIL",
	2: "CRYSTAL",
	3: "LAND_ICE",
}

var ItemType_value = map[string]int32{
	"HEMP":     0,
	"OIL":      1,
	"CRYSTAL":  2,
	"LAND_ICE": 3,
}

func (x ItemType) String() string {
	return proto.EnumName(ItemType_name, int32(x))
}

func (ItemType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_8e148b350ecad19a, []int{0}
}

// Needed to for rpcs
type ItemTypeRequest struct {
	SourceAccount        string   `protobuf:"bytes,1,opt,name=source_account,json=sourceAccount,proto3" json:"source_account,omitempty"`
	Type                 ItemType `protobuf:"varint,2,opt,name=type,proto3,enum=protobuf.ItemType" json:"type,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-" datastore:"-"`
	XXX_unrecognized     []byte   `json:"-" datastore:"-"`
	XXX_sizecache        int32    `json:"-" datastore:"-"`
}

func (m *ItemTypeRequest) Reset()         { *m = ItemTypeRequest{} }
func (m *ItemTypeRequest) String() string { return proto.CompactTextString(m) }
func (*ItemTypeRequest) ProtoMessage()    {}
func (*ItemTypeRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_8e148b350ecad19a, []int{0}
}

func (m *ItemTypeRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ItemTypeRequest.Unmarshal(m, b)
}
func (m *ItemTypeRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ItemTypeRequest.Marshal(b, m, deterministic)
}
func (m *ItemTypeRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ItemTypeRequest.Merge(m, src)
}
func (m *ItemTypeRequest) XXX_Size() int {
	return xxx_messageInfo_ItemTypeRequest.Size(m)
}
func (m *ItemTypeRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ItemTypeRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ItemTypeRequest proto.InternalMessageInfo

func (m *ItemTypeRequest) GetSourceAccount() string {
	if m != nil {
		return m.SourceAccount
	}
	return ""
}

func (m *ItemTypeRequest) GetType() ItemType {
	if m != nil {
		return m.Type
	}
	return ItemType_HEMP
}

type InventoryItem struct {
	Owner                string   `protobuf:"bytes,1,opt,name=owner,proto3" json:"owner,omitempty"`
	Type                 ItemType `protobuf:"varint,2,opt,name=type,proto3,enum=protobuf.ItemType" json:"type,omitempty"`
	Quantity             int64    `protobuf:"varint,3,opt,name=quantity,proto3" json:"quantity,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-" datastore:"-"`
	XXX_unrecognized     []byte   `json:"-" datastore:"-"`
	XXX_sizecache        int32    `json:"-" datastore:"-"`
}

func (m *InventoryItem) Reset()         { *m = InventoryItem{} }
func (m *InventoryItem) String() string { return proto.CompactTextString(m) }
func (*InventoryItem) ProtoMessage()    {}
func (*InventoryItem) Descriptor() ([]byte, []int) {
	return fileDescriptor_8e148b350ecad19a, []int{1}
}

func (m *InventoryItem) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_InventoryItem.Unmarshal(m, b)
}
func (m *InventoryItem) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_InventoryItem.Marshal(b, m, deterministic)
}
func (m *InventoryItem) XXX_Merge(src proto.Message) {
	xxx_messageInfo_InventoryItem.Merge(m, src)
}
func (m *InventoryItem) XXX_Size() int {
	return xxx_messageInfo_InventoryItem.Size(m)
}
func (m *InventoryItem) XXX_DiscardUnknown() {
	xxx_messageInfo_InventoryItem.DiscardUnknown(m)
}

var xxx_messageInfo_InventoryItem proto.InternalMessageInfo

func (m *InventoryItem) GetOwner() string {
	if m != nil {
		return m.Owner
	}
	return ""
}

func (m *InventoryItem) GetType() ItemType {
	if m != nil {
		return m.Type
	}
	return ItemType_HEMP
}

func (m *InventoryItem) GetQuantity() int64 {
	if m != nil {
		return m.Quantity
	}
	return 0
}

type Inventory struct {
	Items                []*InventoryItem `protobuf:"bytes,1,rep,name=items,proto3" json:"items,omitempty"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-" datastore:"-"`
	XXX_unrecognized     []byte           `json:"-" datastore:"-"`
	XXX_sizecache        int32            `json:"-" datastore:"-"`
}

func (m *Inventory) Reset()         { *m = Inventory{} }
func (m *Inventory) String() string { return proto.CompactTextString(m) }
func (*Inventory) ProtoMessage()    {}
func (*Inventory) Descriptor() ([]byte, []int) {
	return fileDescriptor_8e148b350ecad19a, []int{2}
}

func (m *Inventory) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Inventory.Unmarshal(m, b)
}
func (m *Inventory) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Inventory.Marshal(b, m, deterministic)
}
func (m *Inventory) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Inventory.Merge(m, src)
}
func (m *Inventory) XXX_Size() int {
	return xxx_messageInfo_Inventory.Size(m)
}
func (m *Inventory) XXX_DiscardUnknown() {
	xxx_messageInfo_Inventory.DiscardUnknown(m)
}

var xxx_messageInfo_Inventory proto.InternalMessageInfo

func (m *Inventory) GetItems() []*InventoryItem {
	if m != nil {
		return m.Items
	}
	return nil
}

func init() {
	proto.RegisterEnum("protobuf.ItemType", ItemType_name, ItemType_value)
	proto.RegisterType((*ItemTypeRequest)(nil), "protobuf.ItemTypeRequest")
	proto.RegisterType((*InventoryItem)(nil), "protobuf.InventoryItem")
	proto.RegisterType((*Inventory)(nil), "protobuf.Inventory")
}

func init() { proto.RegisterFile("protobuf/inventory.proto", fileDescriptor_8e148b350ecad19a) }

var fileDescriptor_8e148b350ecad19a = []byte{
	// 254 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x8e, 0xcf, 0x4b, 0xc3, 0x40,
	0x10, 0x85, 0xdd, 0xa6, 0xb5, 0xdb, 0xa9, 0xad, 0x61, 0x10, 0x5c, 0x3c, 0x85, 0x80, 0x12, 0x04,
	0x23, 0xd4, 0x8b, 0x78, 0x0b, 0xb5, 0x60, 0x20, 0xfe, 0x60, 0xed, 0xc5, 0x53, 0x6d, 0xc3, 0x0a,
	0x39, 0x74, 0x37, 0x4d, 0x66, 0x95, 0xfc, 0xf7, 0x62, 0x62, 0x42, 0x8f, 0x3d, 0xbe, 0xf7, 0x86,
	0xef, 0x1b, 0x10, 0x79, 0x61, 0xc8, 0x6c, 0xec, 0xd7, 0x6d, 0xa6, 0xbf, 0x95, 0x26, 0x53, 0x54,
	0x61, 0x5d, 0x21, 0x6f, 0x17, 0xff, 0x13, 0x4e, 0x63, 0x52, 0xdb, 0x65, 0x95, 0x2b, 0xa9, 0x76,
	0x56, 0x95, 0x84, 0x97, 0x30, 0x2d, 0x8d, 0x2d, 0x52, 0xb5, 0x5a, 0xa7, 0xa9, 0xb1, 0x9a, 0x04,
	0xf3, 0x58, 0x30, 0x92, 0x93, 0xa6, 0x8d, 0x9a, 0x12, 0xaf, 0xa0, 0x4f, 0x55, 0xae, 0x44, 0xcf,
	0x63, 0xc1, 0x74, 0x86, 0x61, 0x8b, 0x0c, 0x3b, 0x5e, 0xbd, 0xfb, 0x19, 0x4c, 0xe2, 0x56, 0xff,
	0x37, 0xe1, 0x19, 0x0c, 0xcc, 0x8f, 0x56, 0xc5, 0x3f, 0xb6, 0x09, 0x87, 0xe2, 0xf0, 0x02, 0xf8,
	0xce, 0xae, 0x35, 0x65, 0x54, 0x09, 0xc7, 0x63, 0x81, 0x23, 0xbb, 0xec, 0x3f, 0xc0, 0xa8, 0x53,
	0xe1, 0x0d, 0x0c, 0x32, 0x52, 0xdb, 0x52, 0x30, 0xcf, 0x09, 0xc6, 0xb3, 0xf3, 0x3d, 0xe2, 0xfe,
	0x3b, 0xb2, 0xb9, 0xba, 0xbe, 0x07, 0xde, 0x9a, 0x90, 0x43, 0xff, 0x69, 0xf1, 0xfc, 0xe6, 0x1e,
	0xe1, 0x10, 0x9c, 0xd7, 0x38, 0x71, 0x19, 0x8e, 0x61, 0x38, 0x97, 0x1f, 0xef, 0xcb, 0x28, 0x71,
	0x7b, 0x78, 0x02, 0x3c, 0x89, 0x5e, 0x1e, 0x57, 0xf1, 0x7c, 0xe1, 0x3a, 0x9b, 0xe3, 0x1a, 0x7c,
	0xf7, 0x1b, 0x00, 0x00, 0xff, 0xff, 0x8d, 0x0b, 0x51, 0x1e, 0x6f, 0x01, 0x00, 0x00,
}
