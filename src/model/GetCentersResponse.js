

import ApiClient from '../ApiClient';
import GetCentersPageItems from './GetCentersPageItems';

/**
 * The GetCentersResponse model module.
 * @module model/GetCentersResponse
 * @version 1.0
 */
class GetCentersResponse {
    /**
     * Constructs a new <code>GetCentersResponse</code>.
     * GetCentersResponse
     * @alias module:model/GetCentersResponse
     */
    constructor() { 
        
        GetCentersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCentersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCentersResponse} obj Optional instance to populate.
     * @return {module:model/GetCentersResponse} The populated <code>GetCentersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCentersResponse();

            if (data.hasOwnProperty('totalFilteredRecords')) {
                obj['totalFilteredRecords'] = ApiClient.convertToType(data['totalFilteredRecords'], 'Number');
            }
            if (data.hasOwnProperty('pageItems')) {
                obj['pageItems'] = ApiClient.convertToType(data['pageItems'], [GetCentersPageItems]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalFilteredRecords
 */
GetCentersResponse.prototype['totalFilteredRecords'] = undefined;

/**
 * @member {Array.<module:model/GetCentersPageItems>} pageItems
 */
GetCentersResponse.prototype['pageItems'] = undefined;






export default GetCentersResponse;

