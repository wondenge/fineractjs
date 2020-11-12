

import ApiClient from '../ApiClient';

/**
 * The PostDataTablesAppTableIdRequest model module.
 * @module model/PostDataTablesAppTableIdRequest
 * @version 1.0
 */
class PostDataTablesAppTableIdRequest {
    /**
     * Constructs a new <code>PostDataTablesAppTableIdRequest</code>.
     * PostDataTablesAppTableIdRequest
     * @alias module:model/PostDataTablesAppTableIdRequest
     */
    constructor() { 
        
        PostDataTablesAppTableIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostDataTablesAppTableIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostDataTablesAppTableIdRequest} obj Optional instance to populate.
     * @return {module:model/PostDataTablesAppTableIdRequest} The populated <code>PostDataTablesAppTableIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostDataTablesAppTableIdRequest();

            if (data.hasOwnProperty('BusinessDescription')) {
                obj['BusinessDescription'] = ApiClient.convertToType(data['BusinessDescription'], 'String');
            }
            if (data.hasOwnProperty('Comment')) {
                obj['Comment'] = ApiClient.convertToType(data['Comment'], 'String');
            }
            if (data.hasOwnProperty('Education_cv')) {
                obj['Education_cv'] = ApiClient.convertToType(data['Education_cv'], 'String');
            }
            if (data.hasOwnProperty('Gender_cd')) {
                obj['Gender_cd'] = ApiClient.convertToType(data['Gender_cd'], 'Number');
            }
            if (data.hasOwnProperty('HighestRatePaid')) {
                obj['HighestRatePaid'] = ApiClient.convertToType(data['HighestRatePaid'], 'Number');
            }
            if (data.hasOwnProperty('NextVisit')) {
                obj['NextVisit'] = ApiClient.convertToType(data['NextVisit'], 'String');
            }
            if (data.hasOwnProperty('YearsinBusiness')) {
                obj['YearsinBusiness'] = ApiClient.convertToType(data['YearsinBusiness'], 'Number');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} BusinessDescription
 */
PostDataTablesAppTableIdRequest.prototype['BusinessDescription'] = undefined;

/**
 * @member {String} Comment
 */
PostDataTablesAppTableIdRequest.prototype['Comment'] = undefined;

/**
 * @member {String} Education_cv
 */
PostDataTablesAppTableIdRequest.prototype['Education_cv'] = undefined;

/**
 * @member {Number} Gender_cd
 */
PostDataTablesAppTableIdRequest.prototype['Gender_cd'] = undefined;

/**
 * @member {Number} HighestRatePaid
 */
PostDataTablesAppTableIdRequest.prototype['HighestRatePaid'] = undefined;

/**
 * @member {String} NextVisit
 */
PostDataTablesAppTableIdRequest.prototype['NextVisit'] = undefined;

/**
 * @member {Number} YearsinBusiness
 */
PostDataTablesAppTableIdRequest.prototype['YearsinBusiness'] = undefined;

/**
 * @member {String} dateFormat
 */
PostDataTablesAppTableIdRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} locale
 */
PostDataTablesAppTableIdRequest.prototype['locale'] = undefined;






export default PostDataTablesAppTableIdRequest;

