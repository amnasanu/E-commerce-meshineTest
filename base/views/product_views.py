from rest_framework.decorators import api_view
from base.models import Product
from rest_framework.response import Response
from base.serializer import ProductSerializer

@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('keyword')
    if query == 'null':
        query = ''
        products = Product.objects.all()

    products = Product.objects.filter(
        name__icontains=query).order_by('-createdAt')

    serializer = ProductSerializer(products, many=True)
    return Response({'products': serializer.data})


@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(product, many = False)
    
    return Response(serializer.data)