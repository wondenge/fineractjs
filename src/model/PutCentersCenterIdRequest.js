

import ApiClient from '../ApiClient';

/**
 * The PutCentersCenterIdRequest model module.
 * @module model/PutCentersCenterIdRequest
 * @version 1.0
 */
class PutCentersCenterIdRequest {
    /**
     * Constructs a new <code>PutCentersCenterIdRequest</code>.
     * PutCentersCenterIdRequest
     * @alias module:model/PutCentersCenterIdRequest
     */
    constructor() { 
        
        PutCentersCenterIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutCentersCenterIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutCentersCenterIdRequest} obj Optional instance to populate.
     * @return {module:model/PutCentersCenterIdRequest} The populated <code>PutCentersCenterIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutCentersCenterIdRequest();

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
PutCentersCenterIdRequest.prototype['name'] = undefined;






export default PutCentersCenterIdRequest;

