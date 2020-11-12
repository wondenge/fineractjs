

import ApiClient from '../ApiClient';

/**
 * The PutFundsFundIdRequest model module.
 * @module model/PutFundsFundIdRequest
 * @version 1.0
 */
class PutFundsFundIdRequest {
    /**
     * Constructs a new <code>PutFundsFundIdRequest</code>.
     * PutFundsFundIdRequest
     * @alias module:model/PutFundsFundIdRequest
     */
    constructor() { 
        
        PutFundsFundIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutFundsFundIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutFundsFundIdRequest} obj Optional instance to populate.
     * @return {module:model/PutFundsFundIdRequest} The populated <code>PutFundsFundIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutFundsFundIdRequest();

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
PutFundsFundIdRequest.prototype['name'] = undefined;






export default PutFundsFundIdRequest;

