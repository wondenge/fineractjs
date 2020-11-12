

import ApiClient from '../ApiClient';
import PutChargesChargeIdRequest from './PutChargesChargeIdRequest';

/**
 * The PutChargesChargeIdResponse model module.
 * @module model/PutChargesChargeIdResponse
 * @version 1.0
 */
class PutChargesChargeIdResponse {
    /**
     * Constructs a new <code>PutChargesChargeIdResponse</code>.
     * PutChargesChargeIdResponse
     * @alias module:model/PutChargesChargeIdResponse
     */
    constructor() { 
        
        PutChargesChargeIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutChargesChargeIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutChargesChargeIdResponse} obj Optional instance to populate.
     * @return {module:model/PutChargesChargeIdResponse} The populated <code>PutChargesChargeIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutChargesChargeIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutChargesChargeIdRequest.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutChargesChargeIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutChargesChargeIdRequest} changes
 */
PutChargesChargeIdResponse.prototype['changes'] = undefined;






export default PutChargesChargeIdResponse;

