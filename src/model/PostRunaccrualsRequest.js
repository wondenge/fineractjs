

import ApiClient from '../ApiClient';

/**
 * The PostRunaccrualsRequest model module.
 * @module model/PostRunaccrualsRequest
 * @version 1.0
 */
class PostRunaccrualsRequest {
    /**
     * Constructs a new <code>PostRunaccrualsRequest</code>.
     * runaccrualsRequest
     * @alias module:model/PostRunaccrualsRequest
     * @param tillDate {String} which specifies periodic accruals should happen till the given Date
     */
    constructor(tillDate) { 
        
        PostRunaccrualsRequest.initialize(this, tillDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tillDate) { 
        obj['tillDate'] = tillDate;
    }

    /**
     * Constructs a <code>PostRunaccrualsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRunaccrualsRequest} obj Optional instance to populate.
     * @return {module:model/PostRunaccrualsRequest} The populated <code>PostRunaccrualsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRunaccrualsRequest();

            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('tillDate')) {
                obj['tillDate'] = ApiClient.convertToType(data['tillDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} locale
 */
PostRunaccrualsRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostRunaccrualsRequest.prototype['dateFormat'] = undefined;

/**
 * which specifies periodic accruals should happen till the given Date
 * @member {String} tillDate
 */
PostRunaccrualsRequest.prototype['tillDate'] = undefined;






export default PostRunaccrualsRequest;

