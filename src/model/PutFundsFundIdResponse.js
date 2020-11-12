

import ApiClient from '../ApiClient';
import PutFundsFundIdRequest from './PutFundsFundIdRequest';

/**
 * The PutFundsFundIdResponse model module.
 * @module model/PutFundsFundIdResponse
 * @version 1.0
 */
class PutFundsFundIdResponse {
    /**
     * Constructs a new <code>PutFundsFundIdResponse</code>.
     * PutFundsFundIdResponse
     * @alias module:model/PutFundsFundIdResponse
     */
    constructor() { 
        
        PutFundsFundIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutFundsFundIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutFundsFundIdResponse} obj Optional instance to populate.
     * @return {module:model/PutFundsFundIdResponse} The populated <code>PutFundsFundIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutFundsFundIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutFundsFundIdRequest.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutFundsFundIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutFundsFundIdRequest} changes
 */
PutFundsFundIdResponse.prototype['changes'] = undefined;






export default PutFundsFundIdResponse;

