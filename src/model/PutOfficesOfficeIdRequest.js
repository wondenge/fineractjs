

import ApiClient from '../ApiClient';

/**
 * The PutOfficesOfficeIdRequest model module.
 * @module model/PutOfficesOfficeIdRequest
 * @version 1.0
 */
class PutOfficesOfficeIdRequest {
    /**
     * Constructs a new <code>PutOfficesOfficeIdRequest</code>.
     * PutOfficesOfficeIdRequest
     * @alias module:model/PutOfficesOfficeIdRequest
     */
    constructor() { 
        
        PutOfficesOfficeIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutOfficesOfficeIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutOfficesOfficeIdRequest} obj Optional instance to populate.
     * @return {module:model/PutOfficesOfficeIdRequest} The populated <code>PutOfficesOfficeIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutOfficesOfficeIdRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PutOfficesOfficeIdRequest.prototype['name'] = undefined;






export default PutOfficesOfficeIdRequest;

