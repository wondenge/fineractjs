

import ApiClient from '../ApiClient';

/**
 * The PostTellersTellerIdCashiersCashierIdSettleResponse model module.
 * @module model/PostTellersTellerIdCashiersCashierIdSettleResponse
 * @version 1.0
 */
class PostTellersTellerIdCashiersCashierIdSettleResponse {
    /**
     * Constructs a new <code>PostTellersTellerIdCashiersCashierIdSettleResponse</code>.
     * PostTellersTellerIdCashiersCashierIdSettleResponse
     * @alias module:model/PostTellersTellerIdCashiersCashierIdSettleResponse
     */
    constructor() { 
        
        PostTellersTellerIdCashiersCashierIdSettleResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostTellersTellerIdCashiersCashierIdSettleResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostTellersTellerIdCashiersCashierIdSettleResponse} obj Optional instance to populate.
     * @return {module:model/PostTellersTellerIdCashiersCashierIdSettleResponse} The populated <code>PostTellersTellerIdCashiersCashierIdSettleResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostTellersTellerIdCashiersCashierIdSettleResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('subResourceId')) {
                obj['subResourceId'] = ApiClient.convertToType(data['subResourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PostTellersTellerIdCashiersCashierIdSettleResponse.prototype['resourceId'] = undefined;

/**
 * @member {Number} subResourceId
 */
PostTellersTellerIdCashiersCashierIdSettleResponse.prototype['subResourceId'] = undefined;






export default PostTellersTellerIdCashiersCashierIdSettleResponse;

