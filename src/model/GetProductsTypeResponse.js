

import ApiClient from '../ApiClient';
import GetProductsPageItems from './GetProductsPageItems';

/**
 * The GetProductsTypeResponse model module.
 * @module model/GetProductsTypeResponse
 * @version 1.0
 */
class GetProductsTypeResponse {
    /**
     * Constructs a new <code>GetProductsTypeResponse</code>.
     * GetProductsTypeResponse
     * @alias module:model/GetProductsTypeResponse
     */
    constructor() { 
        
        GetProductsTypeResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductsTypeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductsTypeResponse} obj Optional instance to populate.
     * @return {module:model/GetProductsTypeResponse} The populated <code>GetProductsTypeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductsTypeResponse();

            if (data.hasOwnProperty('totalFilteredRecords')) {
                obj['totalFilteredRecords'] = ApiClient.convertToType(data['totalFilteredRecords'], 'Number');
            }
            if (data.hasOwnProperty('pageItems')) {
                obj['pageItems'] = ApiClient.convertToType(data['pageItems'], [GetProductsPageItems]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalFilteredRecords
 */
GetProductsTypeResponse.prototype['totalFilteredRecords'] = undefined;

/**
 * @member {Array.<module:model/GetProductsPageItems>} pageItems
 */
GetProductsTypeResponse.prototype['pageItems'] = undefined;






export default GetProductsTypeResponse;

